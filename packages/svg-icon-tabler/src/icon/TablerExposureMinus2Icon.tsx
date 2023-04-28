import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerExposureMinus2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerExposureMinus2Icon = React.forwardRef<SVGSVGElement, TablerExposureMinus2IconProps>(
	function TablerExposureMinus2Icon(props, ref) {
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
				<path d="M12 9a4 4 0 1 1 8 0c0 1.098 -.564 2.025 -1.159 2.815l-6.841 7.185h8" />
				<path d="M3 12h6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerExposureMinus2Icon.displayName = "TablerExposureMinus2Icon";
}
