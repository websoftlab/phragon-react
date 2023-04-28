import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPolaroidIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPolaroidIcon = React.forwardRef<SVGSVGElement, TablerPolaroidIconProps>(function TablerPolaroidIcon(
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
			<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
			<path d="M4 16l16 0" />
			<path d="M4 12l3 -3c.928 -.893 2.072 -.893 3 0l4 4" />
			<path d="M13 12l2 -2c.928 -.893 2.072 -.893 3 0l2 2" />
			<path d="M14 7l.01 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPolaroidIcon.displayName = "TablerPolaroidIcon";
}
