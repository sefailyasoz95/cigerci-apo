import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { branches } from "../data/branches";
import { useLocalized } from "../hooks/useLocalized";
import { useGsapContext } from "../hooks/useGsapContext";
import SectionHeader from "./SectionHeader";

const mapsLink = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const mapsEmbed = (q: string) => `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;

export default function Branches() {
	const { t } = useTranslation();
	const loc = useLocalized();
	const [active, setActive] = useState(branches[0].id);
	const activeBranch = branches.find((b) => b.id === active) ?? branches[0];

	const ref = useGsapContext<HTMLElement>((_s, scope) => {
		gsap.from(scope.querySelectorAll("[data-card]"), {
			y: 50,
			opacity: 0,
			duration: 0.8,
			stagger: 0.15,
			ease: "power3.out",
			scrollTrigger: { trigger: scope.querySelector("[data-grid]"), start: "top 85%", once: true },
		});
		gsap.from(scope.querySelector("[data-map]"), {
			opacity: 0,
			y: 40,
			duration: 0.9,
			ease: "power3.out",
			scrollTrigger: { trigger: scope.querySelector("[data-map]"), start: "top 88%", once: true },
		});
	});

	const showOnMap = (id: string) => {
		setActive(id);
		document.getElementById("branch-map")?.scrollIntoView({ behavior: "smooth", block: "center" });
	};

	return (
		<section id='branches' ref={ref} className='relative z-10 scroll-mt-24 bg-[var(--bg)] py-24 sm:py-32'>
			<div className='container-px'>
				<SectionHeader kicker={t("branches.kicker")} title={t("branches.title")} subtitle={t("branches.subtitle")} />

				<div data-grid className='mt-14 grid gap-6 md:grid-cols-3'>
					{branches.map((b) => (
						<article
							data-card
							key={b.id}
							className={`surface grain group relative flex flex-col overflow-hidden rounded-[2rem] border p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ember-500/10 ${
								b.id === active ? "border-ember-500/60" : "border-[var(--line)] hover:border-ember-500/60"
							}`}>
							<div className='mb-6 flex items-start justify-between'>
								<div>
									<h3 className='font-display text-2xl font-extrabold'>{loc(b.city)}</h3>
									<p className='text-sm text-ember-500'>{loc(b.district)}</p>
								</div>
								<span className='grid h-12 w-12 place-items-center rounded-2xl bg-ember-500/10 text-ember-500 transition-transform duration-500 group-hover:rotate-12'>
									<svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
										<path d='M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z' />
										<circle cx='12' cy='10' r='3' />
									</svg>
								</span>
							</div>

							<p className='text-sm leading-relaxed text-soft'>{loc(b.note)}</p>

							<div className='mt-5 space-y-2 border-t border-[var(--line)] pt-5 text-sm text-soft'>
								<p className='flex items-start gap-2'>
									<span className='mt-0.5 text-ember-500'>⚲</span>
									{loc(b.address)}
								</p>
								<p className='flex items-center gap-2'>
									<span className='text-ember-500'>◷</span>
									{loc(b.hours)}
								</p>
								{b.phone && (
									<p className='flex items-center gap-2'>
										<span className='text-ember-500'>✆</span>
										<span dir='ltr'>{b.phone}</span>
									</p>
								)}
							</div>

							<div className='mt-7 flex flex-wrap gap-2'>
								<Link to={`/branch/${b.id}`} className='btn-primary flex-1'>
									{t("branches.viewMenu")}
								</Link>
								<button onClick={() => showOnMap(b.id)} className='btn-ghost px-4' aria-label={t("branches.onMap")}>
									<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
										<path d='M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z' />
										<circle cx='12' cy='10' r='3' />
									</svg>
								</button>
							</div>
						</article>
					))}
				</div>

				{/* Gömülü Google harita */}
				<div data-map id='branch-map' className='mt-12'>
					<div className='mb-4 flex flex-wrap items-center justify-between gap-3'>
						<div className='flex flex-wrap gap-1.5 rounded-full border border-[var(--line)] p-1.5'>
							{branches.map((b) => (
								<button
									key={b.id}
									onClick={() => setActive(b.id)}
									className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
										b.id === active
											? "bg-ember-500 text-white shadow-md shadow-ember-500/30"
											: "text-soft hover:text-[var(--text)]"
									}`}>
									{loc(b.city)}
								</button>
							))}
						</div>
						<a href={mapsLink(activeBranch.mapQuery)} target='_blank' rel='noreferrer' className='btn-ghost'>
							{t("branches.directions")}
							<svg
								width='15'
								height='15'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								className='rtl:rotate-180'>
								<path d='M7 17L17 7M7 7h10v10' strokeLinecap='round' strokeLinejoin='round' />
							</svg>
						</a>
					</div>

					<div className='relative overflow-hidden rounded-[2rem] border border-[var(--line)] shadow-xl'>
						<iframe
							key={activeBranch.id}
							title={`${loc(activeBranch.city)} — ${loc(activeBranch.district)}`}
							src={mapsEmbed(activeBranch.mapQuery)}
							className='h-[360px] w-full sm:h-[440px]'
							style={{ border: 0 }}
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
							allowFullScreen
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
