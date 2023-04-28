import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLetterXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLetterXIcon = React.forwardRef<SVGSVGElement, TablerLetterXIconProps>(function TablerLetterXIcon(
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
			<path d="M7 4l10 16" />
			<path d="M17 4l-10 16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLetterXIcon.displayName = "TablerLetterXIcon";
}
