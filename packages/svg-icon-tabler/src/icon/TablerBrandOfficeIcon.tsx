import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandOfficeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandOfficeIcon = React.forwardRef<SVGSVGElement, TablerBrandOfficeIconProps>(
	function TablerBrandOfficeIcon(props, ref) {
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
				<path d="M4 18h9v-12l-5 2v5l-4 2v-8l9 -4l7 2v13l-7 3z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandOfficeIcon.displayName = "TablerBrandOfficeIcon";
}
