import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLetterTIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLetterTIcon = React.forwardRef<SVGSVGElement, TablerLetterTIconProps>(function TablerLetterTIcon(
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
			<path d="M6 4l12 0" />
			<path d="M12 4l0 16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLetterTIcon.displayName = "TablerLetterTIcon";
}
