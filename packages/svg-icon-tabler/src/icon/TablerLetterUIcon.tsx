import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLetterUIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLetterUIcon = React.forwardRef<SVGSVGElement, TablerLetterUIconProps>(function TablerLetterUIcon(
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
			<path d="M6 4v11a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-11" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLetterUIcon.displayName = "TablerLetterUIcon";
}
