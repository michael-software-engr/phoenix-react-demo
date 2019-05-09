export const dateFormatter = (date) => {
  if (!date) return '';

  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

export const defaultDueDate = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
};

export const getDateFinished = ({ doChange, isDone, dateFinished }) => {
  if (!doChange) return dateFinished;

  if (isDone) return new Date();

  return '';
};
