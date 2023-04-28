import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCirclePlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCirclePlusIcon = React.forwardRef<SVGSVGElement, TablerCirclePlusIconProps>(
	function TablerCirclePlusIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M9 12l6 0" />
				<path d="M12 9l0 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCirclePlusIcon.displayName = "TablerCirclePlusIcon";
}
