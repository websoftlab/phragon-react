import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlipHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlipHorizontalIcon = React.forwardRef<SVGSVGElement, TablerFlipHorizontalIconProps>(
	function TablerFlipHorizontalIcon(props, ref) {
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
				<path d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" />
				<path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" />
				<path d="M12 20v2" />
				<path d="M12 14v2" />
				<path d="M12 8v2" />
				<path d="M12 2v2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFlipHorizontalIcon.displayName = "TablerFlipHorizontalIcon";
}
