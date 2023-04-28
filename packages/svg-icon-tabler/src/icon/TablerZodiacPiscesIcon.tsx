import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZodiacPiscesIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZodiacPiscesIcon = React.forwardRef<SVGSVGElement, TablerZodiacPiscesIconProps>(
	function TablerZodiacPiscesIcon(props, ref) {
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
				<path d="M5 3a21 21 0 0 1 0 18" />
				<path d="M19 3a21 21 0 0 0 0 18" />
				<path d="M5 12l14 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerZodiacPiscesIcon.displayName = "TablerZodiacPiscesIcon";
}
