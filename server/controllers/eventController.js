import Event from '../models/Event.js';

export const createEvent = async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Only admins can create events' }); // ✅ Admin check
    }

    const { title, description, date, location, maxParticipants } = req.body;
    const image = req.file.path;

    const event = new Event({
      title,
      description,
      date,
      location,
      maxParticipants,
      image,
      createdBy: req.user._id,
    });

    await event.save();
    res.status(201).json({ message: 'Event created successfully', event });
  } catch (err) {
    res.status(500).json({ message: 'Error creating event', error: err.message });
  }
};

export const getAllEvents = async (req, res) => {
  const events = await Event.find().populate('createdBy', 'username');
  res.json(events);
};

export const registerForEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (!event) return res.status(404).json({ message: 'Event not found' });

  if (event.registeredUsers.includes(req.user._id)) {
    return res.status(400).json({ message: 'Already registered' });
  }

  event.registeredUsers.push(req.user._id);
  await event.save();
  res.json({ message: 'Registered successfully' });
};
