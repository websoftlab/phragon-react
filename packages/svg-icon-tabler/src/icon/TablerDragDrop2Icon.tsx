import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDragDrop2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDragDrop2Icon = React.forwardRef<SVGSVGElement, TablerDragDrop2IconProps>(
	function TablerDragDrop2Icon(props, ref) {
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
				<path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
				<path d="M4 4l0 .01" />
				<path d="M8 4l0 .01" />
				<path d="M12 4l0 .01" />
				<path d="M16 4l0 .01" />
				<path d="M4 8l0 .01" />
				<path d="M4 12l0 .01" />
				<path d="M4 16l0 .01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDragDrop2Icon.displayName = "TablerDragDrop2Icon";
}
