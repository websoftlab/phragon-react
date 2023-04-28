import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileCodeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileCodeIcon = React.forwardRef<SVGSVGElement, TablerFileCodeIconProps>(function TablerFileCodeIcon(
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
			<path d="M14 3v4a1 1 0 0 0 1 1h4" />
			<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
			<path d="M10 13l-1 2l1 2" />
			<path d="M14 13l1 2l-1 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFileCodeIcon.displayName = "TablerFileCodeIcon";
}
