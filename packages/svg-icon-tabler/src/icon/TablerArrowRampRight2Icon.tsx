import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowRampRight2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowRampRight2Icon = React.forwardRef<SVGSVGElement, TablerArrowRampRight2IconProps>(
	function TablerArrowRampRight2Icon(props, ref) {
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
				<path d="M6 3v8.707" />
				<path d="M16 14l4 -4l-4 -4" />
				<path d="M6 21c0 -6.075 4.925 -11 11 -11h3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowRampRight2Icon.displayName = "TablerArrowRampRight2Icon";
}
