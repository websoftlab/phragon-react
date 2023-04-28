import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowLoopLeft2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowLoopLeft2Icon = React.forwardRef<SVGSVGElement, TablerArrowLoopLeft2IconProps>(
	function TablerArrowLoopLeft2Icon(props, ref) {
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
				<path d="M13 21v-6m0 -6v-1a4 4 0 1 1 4 4h-13" />
				<path d="M8 16l-4 -4l4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowLoopLeft2Icon.displayName = "TablerArrowLoopLeft2Icon";
}
