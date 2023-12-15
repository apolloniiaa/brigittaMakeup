import { motion } from 'framer-motion';

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width='23' height='22' viewBox='0 0 23 23'>
        <motion.path
          strokeWidth='3'
          stroke='#e7ba90'
          strokeLinecap='round'
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' }, // Hosszabb első vonal
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <motion.path
          strokeWidth='3'
          stroke='#e7ba90'
          strokeLinecap='round'
          d='M 2 9.423 L 15 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth='3'
          stroke='#e7ba90'
          strokeLinecap='round'
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' }, // Hosszabb utolsó vonal
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
