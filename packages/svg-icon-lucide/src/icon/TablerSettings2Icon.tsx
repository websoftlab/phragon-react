import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSettings2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSettings2Icon = React.forwardRef<SVGSVGElement, TablerSettings2IconProps>(
	function TablerSettings2Icon(props, ref) {
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
				<path d="M20 7h-9" />
				<path d="M14 17H5" />
				<path d="M20 17 A3 3 0 0 1 17 20 A3 3 0 0 1 14 17 A3 3 0 0 1 20 17" />
				<path d="M10 7 A3 3 0 0 1 7 10 A3 3 0 0 1 4 7 A3 3 0 0 1 10 7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSettings2Icon.displayName = "TablerSettings2Icon";
}
