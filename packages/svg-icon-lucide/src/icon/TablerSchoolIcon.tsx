import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSchoolIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSchoolIcon = React.forwardRef<SVGSVGElement, TablerSchoolIconProps>(function TablerSchoolIcon(
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
			<path d="m4 6 8-4 8 4" />
			<path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
			<path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
			<path d="M18 5v17" />
			<path d="M6 5v17" />
			<path d="M14 9 A2 2 0 0 1 12 11 A2 2 0 0 1 10 9 A2 2 0 0 1 14 9" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSchoolIcon.displayName = "TablerSchoolIcon";
}
