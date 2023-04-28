import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface Tabler24HoursIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const Tabler24HoursIcon = React.forwardRef<SVGSVGElement, Tabler24HoursIconProps>(function Tabler24HoursIcon(
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
			<path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
			<path d="M4 13a8.094 8.094 0 0 0 3 5.24" />
			<path d="M11 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
			<path d="M17 15v2a1 1 0 0 0 1 1h1" />
			<path d="M20 15v6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	Tabler24HoursIcon.displayName = "Tabler24HoursIcon";
}
