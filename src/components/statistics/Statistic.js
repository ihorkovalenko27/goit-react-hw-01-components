import PropTypes from 'prop-types';
import s from '../statistics/Statistic.module.css';

function randomColor() {
  const rgbNum = () => Math.floor(Math.random() * 256);
  const r = rgbNum();
  const g = rgbNum();
  const b = rgbNum();

  return `rgb(${r},${g},${b})`;
}

const Statistic = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {stats.map(stat => (
          <li key={stat.id} className={s.item} style={{ backgroundColor: randomColor() }}>
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistic;
