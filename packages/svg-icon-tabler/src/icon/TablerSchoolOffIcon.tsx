import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSchoolOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSchoolOffIcon = React.forwardRef<SVGSVGElement, TablerSchoolOffIconProps>(
	function TablerSchoolOffIcon(props, ref) {
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
				<path d="M22 9l-10 -4l-2.136 .854m-2.864 1.146l-5 2l10 4l.697 -.279m2.878 -1.151l6.425 -2.57v6" />
				<path d="M6 10.6v5.4c0 1.657 2.686 3 6 3c2.334 0 4.357 -.666 5.35 -1.64m.65 -3.36v-3.4" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSchoolOffIcon.displayName = "TablerSchoolOffIcon";
}
