import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDropletHalfFilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDropletHalfFilledIcon = React.forwardRef<SVGSVGElement, TablerDropletHalfFilledIconProps>(
	function TablerDropletHalfFilledIcon(props, ref) {
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
				<path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8zm5.2 -8v17m0 -8l3.544 -3.544m-3.544 8.844l5.558 -5.558" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDropletHalfFilledIcon.displayName = "TablerDropletHalfFilledIcon";
}
