import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowRampLeft2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowRampLeft2Icon = React.forwardRef<SVGSVGElement, TablerArrowRampLeft2IconProps>(
	function TablerArrowRampLeft2Icon(props, ref) {
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
				<path d="M18 3v8.707" />
				<path d="M8 14l-4 -4l4 -4" />
				<path d="M18 21c0 -6.075 -4.925 -11 -11 -11h-3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowRampLeft2Icon.displayName = "TablerArrowRampLeft2Icon";
}
