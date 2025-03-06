export default function Section({ title,/*  id, */ children, ...forwardedProps }) {
	return (
		<section /* id={id} */ id={forwardedProps.id}>
      <h2>{title}</h2>
      {children}
    </section>
	);
}
