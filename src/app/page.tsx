import styles from "../styles/page.module.css";
import FormModal from "@/components/form-modal";

export default function Home() {
	return (
		<section className="">
			<div
				className={
					styles.background +
					" main min-h-screen flex justify-center items-center z-50"
				}
			>
				<div className="flex flex-col">
					<h2 className="font-bold text-2xl mb-4">Inicie uma conversa</h2>
					<FormModal />
				</div>
			</div>
		</section>
	);
}
