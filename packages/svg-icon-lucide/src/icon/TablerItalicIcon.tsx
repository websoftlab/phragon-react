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
			<path d="M19 4 L10 4" />
			<path d="M14 20 L5 20" />
			<path d="M15 4 L9 20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerItalicIcon.displayName = "TablerItalicIcon";
}
