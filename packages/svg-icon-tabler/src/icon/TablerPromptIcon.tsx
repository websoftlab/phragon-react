import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPromptIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPromptIcon = React.forwardRef<SVGSVGElement, TablerPromptIconProps>(function TablerPromptIcon(
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
			<path d="M5 7l5 5l-5 5" />
			<path d="M13 17l6 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPromptIcon.displayName = "TablerPromptIcon";
}
