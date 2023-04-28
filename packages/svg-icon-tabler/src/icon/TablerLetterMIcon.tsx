import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLetterMIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLetterMIcon = React.forwardRef<SVGSVGElement, TablerLetterMIconProps>(function TablerLetterMIcon(
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
			<path d="M6 20v-16l6 14l6 -14v16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLetterMIcon.displayName = "TablerLetterMIcon";
}
