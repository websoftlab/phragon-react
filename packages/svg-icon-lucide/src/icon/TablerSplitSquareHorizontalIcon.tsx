import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSplitSquareHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSplitSquareHorizontalIcon = React.forwardRef<SVGSVGElement, TablerSplitSquareHorizontalIconProps>(
	function TablerSplitSquareHorizontalIcon(props, ref) {
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
				<path d="M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" />
				<path d="M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" />
				<path d="M12 4 L12 20" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSplitSquareHorizontalIcon.displayName = "TablerSplitSquareHorizontalIcon";
}
