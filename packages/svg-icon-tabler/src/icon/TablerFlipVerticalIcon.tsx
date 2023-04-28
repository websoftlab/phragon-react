import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlipVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlipVerticalIcon = React.forwardRef<SVGSVGElement, TablerFlipVerticalIconProps>(
	function TablerFlipVerticalIcon(props, ref) {
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
				<path d="M12 3l0 18" />
				<path d="M16 7l0 10l5 0l-5 -10" />
				<path d="M8 7l0 10l-5 0l5 -10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFlipVerticalIcon.displayName = "TablerFlipVerticalIcon";
}
