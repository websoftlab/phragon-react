import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLetterRIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLetterRIcon = React.forwardRef<SVGSVGElement, TablerLetterRIconProps>(function TablerLetterRIcon(
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
			<path d="M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5" />
			<path d="M12 13l5 7" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLetterRIcon.displayName = "TablerLetterRIcon";
}
