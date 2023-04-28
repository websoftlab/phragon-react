import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowBearRight2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowBearRight2Icon = React.forwardRef<SVGSVGElement, TablerArrowBearRight2IconProps>(
	function TablerArrowBearRight2Icon(props, ref) {
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
				<path d="M15 3h5v5" />
				<path d="M20 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" />
				<path d="M4 5l4.5 4.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowBearRight2Icon.displayName = "TablerArrowBearRight2Icon";
}
