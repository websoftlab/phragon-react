import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerToolsKitchen2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerToolsKitchen2Icon = React.forwardRef<SVGSVGElement, TablerToolsKitchen2IconProps>(
	function TablerToolsKitchen2Icon(props, ref) {
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
				<path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerToolsKitchen2Icon.displayName = "TablerToolsKitchen2Icon";
}
