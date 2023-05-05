import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStarsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStarsIcon = React.forwardRef<SVGSVGElement, TablerStarsIconProps>(function TablerStarsIcon(
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
			<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
			<path d="M5 3v4" />
			<path d="M19 17v4" />
			<path d="M3 5h4" />
			<path d="M17 19h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerStarsIcon.displayName = "TablerStarsIcon";
}
