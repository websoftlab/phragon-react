import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLetterVIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLetterVIcon = React.forwardRef<SVGSVGElement, TablerLetterVIconProps>(function TablerLetterVIcon(
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
			<path d="M6 4l6 16l6 -16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLetterVIcon.displayName = "TablerLetterVIcon";
}
