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
			<path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
			<path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSchoolIcon.displayName = "TablerSchoolIcon";
}
