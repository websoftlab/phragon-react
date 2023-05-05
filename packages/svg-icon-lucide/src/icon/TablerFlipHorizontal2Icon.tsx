import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlipHorizontal2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlipHorizontal2Icon = React.forwardRef<SVGSVGElement, TablerFlipHorizontal2IconProps>(
	function TablerFlipHorizontal2Icon(props, ref) {
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
				<path d="m3 7 5 5-5 5V7" />
				<path d="m21 7-5 5 5 5V7" />
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
	TablerFlipHorizontal2Icon.displayName = "TablerFlipHorizontal2Icon";
}
