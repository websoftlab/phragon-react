import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUtensilsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUtensilsIcon = React.forwardRef<SVGSVGElement, TablerUtensilsIconProps>(function TablerUtensilsIcon(
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
			<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
			<path d="M7 2v20" />
			<path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerUtensilsIcon.displayName = "TablerUtensilsIcon";
}
