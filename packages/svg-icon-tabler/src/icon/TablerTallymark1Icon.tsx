import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTallymark1IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTallymark1Icon = React.forwardRef<SVGSVGElement, TablerTallymark1IconProps>(
	function TablerTallymark1Icon(props, ref) {
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
				<path d="M12 5l0 14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTallymark1Icon.displayName = "TablerTallymark1Icon";
}
