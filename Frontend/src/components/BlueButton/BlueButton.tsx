import styles from './BlueButton.module.css';

interface BlueButtonI {
	children: string;
}

export default function BlueButton({ children }: BlueButtonI) {
	return (
		<button className={`${styles.button} text-preset-4`}>{children}</button>
	);
}
