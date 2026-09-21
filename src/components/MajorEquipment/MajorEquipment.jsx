import '../ProjectsPreview/ProjectsPreview.css';
import '../../pages/Projects.css';
import './MajorEquipment.css';

const equipmentImages = import.meta.glob('../../assets/images/equipment/*.webp', {
  eager: true,
  query: '?url',
  import: 'default'
});

const equipmentDetails = {
  condition: 'Good',
  deliveryDate: '20-01-2026',
  period: 'All Period',
  ownership: 'Owned',
  image: ''
};

const majorEquipment = [
  { id: 'dumpers', name: 'Dumpers', makeModel: 'Nissan, Ford Import 2013', quantity: '04 Nos', capacity: '280 HP', location: 'Lodhran, Lahore' },
  { id: 'plate-compactor', name: 'Vibratory Plate Compactor', makeModel: 'Hyundai', quantity: '2 Nos', capacity: '2.5 HP', location: 'Lahore' },
  { id: 'motor-grader', name: 'Motor Grader', makeModel: 'Caterpillar, Komatsu', quantity: '1 No', capacity: '185 HP', location: 'Lahore' },
  { id: 'roller', name: 'Roller', makeModel: 'Dynapac', quantity: '12 Nos', capacity: '100 HP', location: 'Lodhran, Lahore' },
  { id: 'dewatering-set', name: 'Dewatering Set', makeModel: 'Not specified', quantity: '1 No', capacity: '20 HP / 16 HP', location: 'Lahore' },
  { id: 'tractor-trolley', name: 'Tractor Trolley', makeModel: 'Massey', quantity: '08 Nos', capacity: '385 HP / 285 HP / 260 HP / 240 HP', location: 'Lodhran, Lahore' },
  { id: 'blade-tractor', name: 'Front Back Blade Tractor', makeModel: 'Belarus', quantity: '5 Nos', capacity: '85 HP', location: 'Lodhran, Lahore' },
  { id: 'water-bowser', name: 'Water Bowser', makeModel: 'Hino, Massey', quantity: '05 Nos', capacity: '85 HP', location: 'Lodhran, Lahore' },
  { id: 'concrete-mixer', name: 'Concrete Mixing Machine', makeModel: 'Local Made', quantity: '03 Nos', capacity: '1 Bag / ½ Bag', location: 'Lodhran, Lahore' }
].map((item) => ({
  ...equipmentDetails,
  ...item,
  image: equipmentImages[`../../assets/images/equipment/${item.name}.webp`]
}));

const fields = [
  ['makeModel', 'Make / Model / Year'],
  ['quantity', 'Quantity'],
  ['capacity', 'Capacity / HP Rating'],
  ['condition', 'Condition'],
  ['location', 'Present Location / Source'],
  ['deliveryDate', 'Date of Delivery at Site'],
  ['period', 'Period of Work on Project'],
  ['ownership', 'Ownership Status']
];

export default function MajorEquipment({ equipment = majorEquipment }) {
  return (
    <section className="major-equipment catalog-projects section" aria-label="List of Major Equipment">
      <div className="container">
        <div className="projects-preview-header">
          <div data-reveal="left">
            <span className="section-label">Our Equipment</span>
            <h2 className="section-title">List of <span>Major Equipment</span></h2>
          </div>
        </div>

        <div className="projects-grid">
          {equipment.map((item) => (
            <article className="project-card" data-reveal="auto" key={item.id}>
              <span className="catalog-corner-lines" aria-hidden="true" />
              <div className="project-image">
                {/* Set an item's image to an imported asset or public image URL. */}
                {item.image && <img src={item.image} alt={item.name} loading="lazy" />}
              </div>
              <div className="project-content">
                <h3>{item.name}</h3>
                <dl className="major-equipment-details">
                  {fields.map(([field, label]) => (
                    <div className="major-equipment-detail" key={field}>
                      <dt>{label}</dt>
                      <dd>{item[field]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
