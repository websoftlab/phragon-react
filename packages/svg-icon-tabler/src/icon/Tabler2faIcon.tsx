import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface Tabler2faIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const Tabler2faIcon = React.forwardRef<SVGSVGElement, Tabler2faIconProps>(function Tabler2faIcon(props, ref) {
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
			<path d="M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54" />
			<path d="M10 16v-8h4" />
			<path d="M10 12l3 0" />
			<path d="M17 16v-6a2 2 0 0 1 4 0v6" />
			<path d="M17 13l4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	Tabler2faIcon.displayName = "Tabler2faIcon";
}
