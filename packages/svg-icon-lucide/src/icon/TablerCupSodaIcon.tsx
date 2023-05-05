import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCupSodaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCupSodaIcon = React.forwardRef<SVGSVGElement, TablerCupSodaIconProps>(function TablerCupSodaIcon(
	props,
	ref
) {
	const { children, ...rest } = props;
	return (
		<SvgIcon
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
			ref={ref}
			size={24}
			icon={undefined}
			fill="none"
		>
			<path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" />
			<path d="M5 8h14" />
			<path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
			<path d="m12 8 1-6h2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCupSodaIcon.displayName = "TablerCupSodaIcon";
}
