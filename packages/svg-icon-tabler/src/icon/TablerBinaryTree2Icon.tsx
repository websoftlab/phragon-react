import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBinaryTree2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBinaryTree2Icon = React.forwardRef<SVGSVGElement, TablerBinaryTree2IconProps>(
	function TablerBinaryTree2Icon(props, ref) {
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
				<path d="M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M7 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M21 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M14 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M12 8v8" />
				<path d="M6.316 12.496l4.368 -4.992" />
				<path d="M17.684 12.496l-4.366 -4.99" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBinaryTree2Icon.displayName = "TablerBinaryTree2Icon";
}
