import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLigatureIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLigatureIcon = React.forwardRef<SVGSVGElement, TablerLigatureIconProps>(function TablerLigatureIcon(
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
			<path d="M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2" />
			<path d="M6 12h4" />
			<path d="M14 12h2v8" />
			<path d="M6 20h4" />
			<path d="M14 20h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLigatureIcon.displayName = "TablerLigatureIcon";
}
