const local = 'hu-HU';
const categoryIconMapping = {
  housing: 'location_city',
  travel: 'flight',
  food: 'local_pizza',
  utilities: 'power',
  insurance: 'security',
  healthcare: 'local_hospital',
  financial: 'account_balance',
  lifestyle: 'fitness_center',
  entertainment: 'golf_course',
  miscellaneous: 'build',
};

function SpendingItem({ item }) {
  const currency = new Intl.NumberFormat(local, {
    style: 'currency',
    currency: item.currency,
    maximumFractionDigits: 0,
  });

  return (
    <li class="collection-item avatar">
      <i class="material-icons circle">{categoryIconMapping[item.category]}</i>
      <span class="title">{item.summary}</span>
      <p>{new Date(item.paid).toLocaleDateString(local)}</p>
      <span class="secondary-content">{currency.format(item.sum)}</span>
    </li>
  );
}

export default SpendingItem;
