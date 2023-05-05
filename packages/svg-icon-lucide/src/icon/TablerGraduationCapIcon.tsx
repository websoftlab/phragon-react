import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGraduationCapIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGraduationCapIcon = React.forwardRef<SVGSVGElement, TablerGraduationCapIconProps>(
	function TablerGraduationCapIcon(props, ref) {
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
				<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
				<path d="M6 12v5c3 3 9 3 12 0v-5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGraduationCapIcon.displayName = "TablerGraduationCapIcon";
}
