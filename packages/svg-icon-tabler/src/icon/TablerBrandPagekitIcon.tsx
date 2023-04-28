import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandPagekitIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandPagekitIcon = React.forwardRef<SVGSVGElement, TablerBrandPagekitIconProps>(
	function TablerBrandPagekitIcon(props, ref) {
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
				<path d="M12.077 20h-5.077v-16h11v14h-5.077" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandPagekitIcon.displayName = "TablerBrandPagekitIcon";
}
