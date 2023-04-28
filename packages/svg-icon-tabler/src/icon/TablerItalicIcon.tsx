import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerItalicIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerItalicIcon = React.forwardRef<SVGSVGElement, TablerItalicIconProps>(function TablerItalicIcon(
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
			<path d="M11 5l6 0" />
			<path d="M7 19l6 0" />
			<path d="M14 5l-4 14" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerItalicIcon.displayName = "TablerItalicIcon";
}
