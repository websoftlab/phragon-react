import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTopologyStar2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTopologyStar2Icon = React.forwardRef<SVGSVGElement, TablerTopologyStar2IconProps>(
	function TablerTopologyStar2Icon(props, ref) {
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
				<path d="M14 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M14 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M6 12h4" />
				<path d="M14 12h4" />
				<path d="M12 6v4" />
				<path d="M12 14v4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTopologyStar2Icon.displayName = "TablerTopologyStar2Icon";
}
