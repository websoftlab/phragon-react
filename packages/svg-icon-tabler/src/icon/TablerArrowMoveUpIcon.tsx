import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowMoveUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowMoveUpIcon = React.forwardRef<SVGSVGElement, TablerArrowMoveUpIconProps>(
	function TablerArrowMoveUpIcon(props, ref) {
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
				<path d="M12 13v-10" />
				<path d="M9 6l3 -3l3 3" />
				<path d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowMoveUpIcon.displayName = "TablerArrowMoveUpIcon";
}
