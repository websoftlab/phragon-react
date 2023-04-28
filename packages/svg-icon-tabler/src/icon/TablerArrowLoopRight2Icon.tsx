import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowLoopRight2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowLoopRight2Icon = React.forwardRef<SVGSVGElement, TablerArrowLoopRight2IconProps>(
	function TablerArrowLoopRight2Icon(props, ref) {
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
				<path d="M12 21v-6m0 -6v-1a4 4 0 1 0 -4 4h13" />
				<path d="M17 16l4 -4l-4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowLoopRight2Icon.displayName = "TablerArrowLoopRight2Icon";
}
